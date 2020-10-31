import React, { useState } from "react";
import { Input, Center, Button } from "@chakra-ui/core";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/core";
import { useForm } from "react-hook-form";
import { Formik } from "formik";

function SearchBar({ getQuery }) {
  const { register, handleSubmit, watch, errors } = useForm();
  const [text, setText] = useState("");
  // const onSubmit = (data) => {
  //     const lcData = (data.champ).toLowerCase()
  //     const cleanData = (lcData).charAt(0).toUpperCase() + (lcData).slice(1)
  //     getQuery(lcData)
  //     console.log(lcData)
  // }

  const onChange = (d) => {
    setText(d);
    console.log(d);
    getQuery(d);
  };

  return (
    <section>
      <form>
        <Center>
          <Input
            name="champ"
            placeholder="Select a Champion"
            focusBorderColor="lime"
            margin="15px"
            padding="5px"
            width="200px"
            ref={register}
            value={text}
            onChange={(e) => onChange(e.target.value)}
          />
          {/* <Button type="submit">Submit</Button> */}
        </Center>
      </form>
    </section>
  );
}

export default SearchBar;
