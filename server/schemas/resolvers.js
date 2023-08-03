const { AuthenticationError } = require('apollo-server-express');
const { Account, Adoption, Medicine } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        Accounts: async () => {
            return await Account.find();
        },

        adoptions: async (parent, {account, username}) => {
            const params = {};

            if (account) {
                params.account = account;
            }

            if(username) {
                params.username = {
                    $regex: username
                };
            }

            return await Adoption.find(params).populate('account')
        },
        medicines: async (parent, {account,username}) => {
            const params = {};

            if (account) {
                params.account = account;
            }

            if(username) {
                params.username = {
                    $regex: username
                };
            }

            return await Medicine.find(params).populate('account')
        },

        adoption: async (parent, {_id}) => {
            return await Adoption.findById(_id).populate('account');
        },

        medicine: async (parent, {_id}) => {
            return await Medicine.findById(_id).populate('account');
        },
        account: async (parent, args, context) => {
            if (context.account) {
                const account = await Account.findById(context.account._id).populate({
                    path: 'saves.adoptions',
                    populate: 'account'
                });

                account.saves.sort((a,b) => b.savedDate - a.savedDate);

                return account;
            }
            throw new AuthenticationError('Gotta log in');
        },
        account: async (parent, args, context) => {
            if (context.account) {
                const account = await Account.findById(context.account._id).populate({
                    path:'saves.medicines',
                    populate: 'account'
                });

                account.saves.sort((a,b) => b.saveDate - a.saveDate);

                return account;
            } 
            throw new AuthenticationError('Gotta log in');
        },
        save: async (parent, {_id}, context) => {
            if(context.account) {
                const account = await Account.findById(context.account._id).populate({
                    path: 'saves.adoptions',
                    populate: 'account'
                });
                return account.save.id(_id);
            }

            throw new AuthenticationError('Gotta log in');
        },
        saved: async (parent, {_id}, context) => {
            if(context.account) {
                const account = await Account.findById(context.account._id).populate({
                    path: 'saves.medicine',
                    populate: 'account'
                });
                return account.saves.id(_id);
            }

            throw new AuthenticationError('Gotta log in');
        }

    },
Mutation: {
    addAccount: async (parent, args) => {
        const account = await Account.create(args);
        const token = signToken(account);

        return {token, user};
    },
    addSave: async (parent, {adoptions, medicines}, context) => {
        console.log(context);
        if(context.account) {
            const save = new Save({adoptions, medicines});

            await Account.findByIdAndUpdate(context.account._id, {$push: {saves: save}});

            return save;
        }
        throw new AuthenticationError('Gotta log in');
    },
    // addMedicine: async (parent, {medicines}, context) => {
    //     console.log(context);
    //     if(context.account) {
    //         const save = new Save({medicines});

    //         await Account.findByIdAndUpdate(context.account._id, {$push: {saves: save}});

    //         return save;
    //     }
    //     throw new AuthenticationError('Gotta log in');
    // }
    updateAdoption: async (parent, { _id, quantity }) => {
        const decrement = Math.abs(quantity) * -1;
  
        return await Adoption.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
      },
      updateMedicine: async (parent, { _id, quantity }) => {
        const decrement = Math.abs(quantity) * -1;
  
        return await Medicine.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
      },
      login: async (parent, { email, password }) => {
        const account = await Account.findOne({ email });
  
        if (!account) {
          throw new AuthenticationError('Wrong Username');
        }
  
        const correctPw = await account.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Wrong Password');
        }
  
        const token = signToken(account);
  
        return { token, account };
      }
}
}