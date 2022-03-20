import { Dayjs } from 'dayjs';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import generatePicker from 'antd/es/date-picker/generatePicker';
// import 'antd/es/date-picker/style/index';
import 'antd/dist/antd.min.css';

const DatePicker = generatePicker<Dayjs>(dayjsGenerateConfig);

const { RangePicker } = DatePicker;

export default RangePicker;
