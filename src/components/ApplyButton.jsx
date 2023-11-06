import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const ApplyButton = () => {
  return (
    <div className="m-10">
      <Stack spacing={2} direction="row">
        <Button variant="contained" className="m-auto w-[250px]">
          Apply
        </Button>
      </Stack>
    </div>
  );
};

export default ApplyButton;
