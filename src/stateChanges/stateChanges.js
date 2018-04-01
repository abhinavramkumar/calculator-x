export const setInput__State = (input) => {
  return (state = {}, props = {}) => {
    return {input};
  }
};

export const appendInput__State = (newInput) => {
  return (state = {}, props = {}) => {
    return {
      input: state.input + newInput
    };
  }
};

export const setOutput__State = (output) => {
  return (state = {}, props = {}) => {
    return {output};
  }
};

export const setError__State = (error) => {
  return (state = {}, props = {}) => {
    return {error};
  }
};

export const resetAll__State = () => {
  return (state = {}, props = {}) => {
    return {error: undefined, input: '', output: 0};
  }
};