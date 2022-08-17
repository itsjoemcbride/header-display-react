import PropTypes from "prop-types";

export default function Form({ setName }) {
  // The event parameter is an object representing the event that was triggered.
  const handleSubmit = (event) => {
    event.preventDefault();

    // The event.target property returns the element that triggered the event.
    const form = event.target;

    const keyValuePairsUsingTheNameAttributesFromTheFormElements = new FormData(
      form
    );

    // Turn the FormData object into an Object Literal with key-value pairs.
    const submission = Object.fromEntries(
      keyValuePairsUsingTheNameAttributesFromTheFormElements
    );

    setName(submission.name);

    Form[2] = "";

    event.target.reset();
  };

  return (
    <form
      className="mx-auto flex w-48 flex-col items-center"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          type="text"
          placeholder="Enter your name"
          id="username"
          className="text-md rounded-full border py-1 pl-2"
          name="name"
        />
      </div>

      <button id="submit" type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
}

Form.propTypes = {
  setName: PropTypes.func.isRequired,
};
