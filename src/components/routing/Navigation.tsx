
import { Card } from '../dashboard/card/Card';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { CreateCardProps, CardType } from '../../interface/interface';
import { ErrorPage } from '../page/ErrorPage';
import { isNullOrUndefined } from '../../helpers/helpers';
import _cardType from '../../cardType.json';

export default function Navigation() {

  const cardType: CardType = { cardType: _cardType.cardType }; // horizontal vertical
  // replace with context

  return (
    <Router>
      <Routes>
        <Route
          path="user/:id"
          element={
            (!isNullOrUndefined(cardType.cardType)) ?
              <Card cardType={cardType} /> :
              <ErrorPage />
          }
        />
      </Routes>
    </Router>
  );
}