const InputField = () => {
  return (
    <div>
      <form className="input">
        <input type="input" placeholder="Enter a task" className="" />
        <button className="input_submit" type="submit">
          Go
        </button>
      </form>
    </div>
  );
};

export default InputField;
