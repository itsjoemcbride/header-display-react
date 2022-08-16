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
          id="name"
          className="text-md rounded-3xl border py-1 pl-2"
          name="name"
        />
      </div>

      <button
        type="submit"
        className=" text-md mt-4 rounded-3xl bg-purple-400 px-4 py-1 font-semibold text-white hover:bg-purple-600"
      >
        Submit
      </button>
    </form>
  );
}

Form.propTypes = {
  setName: PropTypes.func.isRequired,
};
