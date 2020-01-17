import React, { useState } from "react";

export default function Button({ action, name }) {
  return <button onClick={action}>{name}</button>;
}
