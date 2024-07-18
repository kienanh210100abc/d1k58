import { APP_CODE, CAPT_KEY } from "@/constants";
// import { axiosClient } from './axios';
import { Contact } from "../types/contact";
import { axiosClient } from "@/api";

export const contactApi = {
  sendContact,
};

function sendContact(contact: Contact) {
  return axiosClient.post("/pub/contacts", {
    ...contact,
    code: APP_CODE,
    captkey: CAPT_KEY,
  });
}
