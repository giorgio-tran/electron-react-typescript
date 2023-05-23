type ChoiceProps = {
  name: string,
}

const Choice = ({ name }: ChoiceProps) => {
  return (
    <div>
      <button>
        {name}
      </button>
    </div>
  )
}

export default Choice;
