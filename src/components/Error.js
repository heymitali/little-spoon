import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="Error">
      <img
        className="oh-my-god"
        src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXZ0Z3loc3NsZmZzeHRlcTBjOGx0azM2eGRwaXBqdjd0c3Z5cWlpaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TgOYjtgKpS9jAytUlh/giphy.gif"
      />
      <h2>Something went wrong! We couldn't find what you are looking for</h2>
      <h3>{err.status + ": " + err.statusText}</h3>
    </div>
  );
};
export default Error;
