import { createContext, useState, useEffect } from 'react';
import { checkAuthStatus, login, logout, register } from '../services/api';

const UserContext = createContext();

