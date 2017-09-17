// Handle input field change event.
export function handleChange(event) {
  const { name, value } = event.target;
  const fields = this.state.fields;
  this.setState({
    fields: {
      ...fields,
      [name]: value,
    },
  });
}

// Handle form submit event
export function handleSubmit(event) {
  event.preventDefault();
  this.props.onSubmit(this.state.fields);
}
