import React from 'react';
import InputField from './InputField';

const BasicForm = ({ handleChange, handleSubmit, isSubmitting, resetForm, values, errors, touched }) => (
  <form onSubmit={handleSubmit}>
    <div className="colums">
      <div className="column is-full">
        <div className="field">
          <label className="label">Nombre</label>
          <div className="control">
            <input
              name="name"
              className="input"
              onChange={handleChange}
              value={values.name}
            />
          </div>
          {touched.name && errors.name && <p className="help is-danger">{errors.name}</p>}
        </div>
      </div>
      <div className="column is-full">
        <InputField name="lastName" type="text" label="Last Name" />
      </div>
      <div className="is-full">
        <div className="field is-grouped is-grouped-centered">
          <p className="control">
            <button
              className="button is-rounded is-primary"
              disabled={isSubmitting}
              type="submit"
            >
              Submit
            </button>
          </p>
          <p className="control">
            <button
              className="button is-rounded"
              type="button"
              onClick={resetForm}
            >
              Reset
            </button>
          </p>
        </div>
      </div>
    </div>
  </form>
)

export default BasicForm;