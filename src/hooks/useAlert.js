import React, { createContext, useContext, useRef, useCallback, useState } from 'react';
import { Column } from '../components';

const AlertContext = createContext(() => {});

const AlertProvider = ({ children }) => {
  const [current, setCurrent] = useState({ isOpen: false });
  const [auxiliar, setAuxiliar] = useState({ isOpen: false });

  const ref = useRef(false);

  const alert = useCallback(data => {
    if (ref.current) {
      return setAuxiliar({ ...data, isOpen: true });
    }

    ref.current = true;

    setCurrent({ ...data, isOpen: true });
  }, []);

  const handleCloseCurrent = useCallback(() => {
    ref.current = false;

    setCurrent(prev => ({ ...prev, isOpen: false }));
  }, []);

  const handleCloseAuxiliar = useCallback(() => {
    setAuxiliar(prev => ({ ...prev, isOpen: false }));
  }, []);

  return (
    <AlertContext.Provider value={alert}>
      {children}
      <Column {...current} onClose={handleCloseCurrent} />
      <Column {...auxiliar} onClose={handleCloseAuxiliar} />
    </AlertContext.Provider>
  );
};

const useAlert = () => useContext(AlertContext);

export { AlertProvider, useAlert };
