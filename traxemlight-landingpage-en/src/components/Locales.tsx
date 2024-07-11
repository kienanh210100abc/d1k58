import React, { useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';

import { appSelector } from '../redux/slice/app.slice';
import { useAppSelector } from '../hooks/useAppSelector';

const loadLocaleData = (locale: string) => {
    switch (locale) {
        case 'VN':
            return import('utils/locales/vn.json');
        default:
            return import('utils/locales/en.json');
    }
};

type Props = {
    children: React.ReactNode;
};

const Locales: React.FC<Props> = ({ children }) => {
    const [messages, setMessages] = useState<{ [key: string]: string }>();

    const { language } = useAppSelector(appSelector);

    useEffect(() => {
        loadLocaleData(language).then((d: { default: { [key: string]: string } }) => {
            setMessages(d.default);
        });
    }, [language]);

    return (
        <IntlProvider locale={language} messages={messages}>
            {children}
        </IntlProvider>
    );
};

export default Locales;
