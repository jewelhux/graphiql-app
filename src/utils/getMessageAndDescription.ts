const getMessageAndDescription = (error: string) => {
  switch (error) {
    case 'auth/user-not-found':
      return {
        message: 'errorNotification.messageNotFound',
        description: 'errorNotification.descriptionNotFound',
      };

    case 'auth/wrong-password':
      return {
        message: 'errorNotification.messageWrongPass',
        description: 'errorNotification.descriptionWrongPass',
      };

    case 'auth/email-already-in-use':
      return {
        message: 'errorNotification.messageUp',
        description: 'errorNotification.descriptionUp',
      };

    default:
      return {
        message: 'errorNotification.messageDefault',
        description: 'errorNotification.descriptionDefault',
      };
  }
};

export default getMessageAndDescription;
