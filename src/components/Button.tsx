
function Button({ submit, EditId }: { submit: () => void; EditId: string }) {
  return (
    <div>
      {EditId !== "" ? (
        <button className="btn" onClick={() => submit()}>
          Update Task
        </button>
      ) : (
        <button className="btn" onClick={() => submit()}>
          Add Task
        </button>
      )}
    </div>
  );
}

export default Button;
