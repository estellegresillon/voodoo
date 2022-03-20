import { Dayjs } from 'dayjs';
import { RangeValue } from 'rc-picker/lib/interface';
import styled from 'styled-components';

import Checkbox from 'components/common/Checkbox';
import DatePicker from 'components/common/DatePicker';
import { Theme } from 'types';
import { ANDROID_PLATFORM, IOS_PLATFORM } from 'utils/constants';

type SettingsProps = {
  date?: RangeValue<Dayjs>;
  onDateChange: React.Dispatch<React.SetStateAction<RangeValue<Dayjs> | null>>;
  os: string[];
  setOs: React.Dispatch<string[]>;
};

const options = [ANDROID_PLATFORM, IOS_PLATFORM];

const Settings = ({
  date,
  onDateChange,
  os,
  setOs,
}: SettingsProps): JSX.Element => {
  const handleChange = (isChecked: boolean, opt: string) => {
    if (isChecked) {
      setOs([...os, opt]);
    } else {
      const newOsState = [...os].filter((el) => el !== opt);
      setOs(newOsState);
    }
  };

  return (
    <SettingsWrapper>
      <SelectOsWrapper>
        {options.map((opt) => (
          <Checkbox
            key={opt}
            isChecked={os.includes(opt)}
            label={opt}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e.target.checked, opt)
            }
          />
        ))}
      </SelectOsWrapper>
      <DatePicker value={date} onChange={onDateChange} />
      <LegendWrapper>
        <Square /> Highest revenue
      </LegendWrapper>
    </SettingsWrapper>
  );
};

export default Settings;

const SettingsWrapper = styled.div`
  align-items: center;
  display: flex;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: ${({ theme }: Theme) => theme.shadows.normal};
  padding: 30px 40px;
`;

const SelectOsWrapper = styled.div`
  align-items: center;
  display: flex;
  width: 200px;
`;

const LegendWrapper = styled.div`
  align-items: center;
  display: flex;
`;

const Square = styled.div`
  background-color: ${({ theme }: Theme) => theme.colors.secondary};
  border-radius: 3px;
  height: 10px;
  margin-left: 50px;
  margin-right: 10px;
  width: 10px;
`;
