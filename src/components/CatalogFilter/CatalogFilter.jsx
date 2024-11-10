import React from "react";
import { Formik, Form, Field } from "formik";
import css from "./CatalogFilter.module.css";

export default function CatalogFilter({ onSubmitForm }) {
  return (
    <Formik
      initialValues={{
        location: "",
        features: {
          airConditioning: false,
          kitchen: false,
          bathroom: false
          // Add other criteria as needed
        },
        bodyType: ""
      }}
      onSubmit={(values) => {
        onSubmitForm(values);
      }}
    >
      {({ values }) => (
        <Form className={css.filterForm}>
          {/* Location Field */}
          <div className={css.formGroup}>
            <label htmlFor="location">Location:</label>
            <Field
              type="text"
              id="location"
              name="location"
              placeholder="Enter location"
              className={css.input}
            />
          </div>

          {/* Multiple Criteria Checkboxes */}
          <div className={css.formGroup}>
            <label>Features:</label>
            <div className={css.checkboxGroup}>
              <label>
                <Field type="checkbox" name="features.airConditioning" />
                Air Conditioning
              </label>
              <label>
                <Field type="checkbox" name="features.kitchen" />
                Kitchen
              </label>
              <label>
                <Field type="checkbox" name="features.bathroom" />
                Bathroom
              </label>
              {/* Add other features checkboxes here */}
            </div>
          </div>

          {/* Body Type Radio Buttons */}
          <div className={css.formGroup}>
            <label>Body Type:</label>
            <div className={css.radioGroup}>
              <label>
                <Field type="radio" name="bodyType" value="van" />
                Van
              </label>
              <label>
                <Field type="radio" name="bodyType" value="truck" />
                Truck
              </label>
              <label>
                <Field type="radio" name="bodyType" value="suv" />
                SUV
              </label>
              {/* Add other body types as needed */}
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className={css.submitButton}>
            Apply Filters
          </button>
        </Form>
      )}
    </Formik>
  );
}


