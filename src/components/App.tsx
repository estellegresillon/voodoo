import { Dayjs } from 'dayjs';
import groupBy from 'lodash/groupBy';
import { RangeValue } from 'rc-picker/lib/interface';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useFetch from 'use-http';

import Settings from 'components/Settings';
import Dashboard from 'components/Dashboard';
import { Placement } from 'types';
import { DEFAULT_DATE_PERIOD, IOS_PLATFORM } from 'utils/constants';
import { formatApiDate, parseDate } from 'utils/helpers';

const options = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  },
};

const url = process.env.REACT_APP_API_URL;

const App = (): JSX.Element => {
  const [os, setOs] = useState<string[]>([IOS_PLATFORM]);
  const [filteredData, setFilteredData] = useState<Placement[]>([]);
  const [date, setDate] = useState<RangeValue<Dayjs> | null>(
    parseDate(DEFAULT_DATE_PERIOD),
  );

  const { loading, error, data } = useFetch(
    `${url}monetizations?start=${formatApiDate(0, date)}&end=${formatApiDate(
      1,
      date,
    )}&dimensions=game,country,os&aggregates=revenue`,
    options,
    [date],
  );

  useEffect(() => {
    if (data) {
      const sortedByOs = groupBy(data, ({ platform }) => platform);
      let newFilteredData: Placement[] = [];

      os.forEach((os) => {
        const data = newFilteredData.concat(sortedByOs[os]);
        newFilteredData = data;
      });

      setFilteredData(newFilteredData);
    }
  }, [data, os]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error occured !</p>;

  return (
    <AppWrapper>
      <h1>Monetisation Dashboard</h1>
      <p>Displays revenues per game and country in K€ in a specific period.</p>
      <Settings date={date} onDateChange={setDate} os={os} setOs={setOs} />
      {filteredData.length === 0 ? (
        <p style={{ margin: '30px' }}>Select at least one platform</p>
      ) : (
        <Dashboard data={filteredData} />
      )}
    </AppWrapper>
  );
};

export default App;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 50px;
  width: 100%;

  h1 {
    font-weight: bolder;
    margin-bottom: 15px;
  }

  p {
    margin-bottom: 30px;
  }
`;
