import { APP_CODE, CAPT_KEY } from 'constants/index';
import { axiosClient } from './axios';
import { Contact } from './Contact.type';

export const contactApi = {
    sendContact
};

function sendContact(contact: Contact) {
    return axiosClient.post('/pub/contacts', {
        ...contact,
        code: APP_CODE,
        captkey: CAPT_KEY
    });
}
