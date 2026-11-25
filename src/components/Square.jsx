function Square({ value, onClick, index, disabled, isWinning }) {
  const classes = [
    "square",
    value ? `square-${value.toLowerCase()}` : "",
    isWinning ? "square-winner" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={classes}
      type="button"
      onClick={onClick}
      aria-label={`Casa ${index + 1}${value ? `, ${value}` : ", vazia"}`}
      disabled={Boolean(value) || disabled}
    >
      {value}
    </button>
  );
}

export default Square;