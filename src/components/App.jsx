import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LineWave } from 'react-loader-spinner';
import clsx from 'clsx';

import css from '../components/App.module.css';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { fetchContacts } from 'redux/operations';
import { selectErrorContacts, selectisLoadingContacts } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectisLoadingContacts);
  const error = useSelector(selectErrorContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={clsx(css.phonebook)}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h1>Contacts</h1>
      <Filter />
      {isLoading && !error && (
        <LineWave
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="line-wave"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          firstLineColor=""
          middleLineColor=""
          lastLineColor=""
        />
      )}
      <ContactList />
    </div>
  );
};
