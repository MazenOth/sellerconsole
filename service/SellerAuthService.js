import { SellerDatabase } from "../Model/Repos/sellerdatabase.js";

const sellerDatabase = new SellerDatabase();

export class SellerAuthService {
  signInEmail(email) {
    for (let i = 0; i < sellerDatabase.getSellers.length; i++) {
      if (sellerDatabase.getSellers[i].getEmail == email) {
        console.log("email is correct!");
      } else {
        throw new Error("Please check your email!");
      }
    }
  }
  signInPassword(password) {
    for (let i = 0; i < sellerDatabase.getSellers.length; i++) {
      if (sellerDatabase.getSellers[i].getPassword == password) {
        console.log("password is correct!");
        console.log("Singned in successfully!");
      } else {
        throw new Error("Please check your password!");
      }
    }
  }
  signUpEmail(email) {
    sellerDatabase.getNewSeller.setEmail = email;
  }
  signUpPassword(password) {
    sellerDatabase.getNewSeller.setPassword = password;
    sellerDatabase.addNewSeller();
    console.log(
      `You've Successfuly Signed Up and this is your new user below:`
    );
    console.log(sellerDatabase.getNewSeller);
  }
}