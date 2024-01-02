import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import * as Yup from "yup";
import { Button, FormField, Label } from "semantic-ui-react";
import HarunYilmazTextInput from "../utilities/customFormControls/HarunYilmazTextInput";

export default function ProductAdd() {
  const initialValues = { name: "", price: "" };
  const schema = Yup.object({
    name: Yup.string().required("Ürün adı zorunludur"),
    price: Yup.number().required("Ürün fiyatı zorunludur"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="ui form">
            <HarunYilmazTextInput name="name" placeholder="Ürün adı" />
            <HarunYilmazTextInput name="price" placeholder="Ürün fiyatı" />
          <Button primary type="submit">
            Ekle
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
