interface ButtonProps {
  text?: String
}

export function Button(props: ButtonProps) {
  return (
  <button className="bg-violet-500 px-5 py-2 rounded-sm">{props.text || "Send"}</button>
)
}