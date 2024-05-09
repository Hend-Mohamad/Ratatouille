import firebase from 'firebase/compat/app';

export interface Review {
    id: string;
    userId: string;
    recipeId: string;
    rating: number;
    comment: string;
    timestamp: firebase.firestore.Timestamp;
  }
  