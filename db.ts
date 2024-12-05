import Realm from 'realm';
import {string} from 'yup';

// Define the Password schema
class PasswordSchema extends Realm.Object {
  static schema = {
    name: 'Password',
    properties: {
      password: 'string',
      createdOn: 'date',
    },
  };
}

const realm = new Realm({
  schema: [PasswordSchema],
  schemaVersion: 1,
});

export const addPassword = (password: string) => {
  realm.write(() => {
    realm.create('Password', {
      password: password,
      createdOn: new Date(),
    });
  });
};

export const getPasswords = () => {
  return realm.objects('Password');
};

export const deletePassword = (passwordId: string) => {
  realm.write(() => {
    const passwordToDelete = realm.objectForPrimaryKey('Password', passwordId);
    if (passwordToDelete) {
      realm.delete(passwordToDelete);
    }
  });
};

export default realm;
