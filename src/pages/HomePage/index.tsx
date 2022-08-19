import React from 'react';
import { HomeTemplate } from '../../components/templates/HomeTemplate';
import data from './content/index.json';

const HomePage = () => <HomeTemplate data={data} />;

export { HomePage };
