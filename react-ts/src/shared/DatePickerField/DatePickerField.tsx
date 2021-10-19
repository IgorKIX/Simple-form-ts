import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
    console.log(props);
  return <div>Date picker</div>
  // const [field] = useField(props);
  // return (
  //   <DatePicker
  //     {...field}
  //     {...props}
  //     selected={(field.value && new Date(field.value)) || null}
  //     onChange={(val) => {
  //       setFieldValue(field.name, val);
  //     }}
  //   />
  // );
};

export default DatePickerField;
