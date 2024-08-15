import { Box, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { verifyEmail } from "../../../api/services/user";
import { toast } from "react-toastify";
import { getUserDetails, setToken } from "../../../utils/updateCurrentUser";
import { useLocation, useNavigate } from "react-router-dom";
import { CustomLoader } from "../../../common";
import { useDispatch, useSelector } from "react-redux";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token: any = queryParams.get("token");

  const verifyEmailMutation = useMutation({
    mutationFn: () => verifyEmail(token),
    onSuccess: () => {
      toast.success("email verified");
      console.log("email verified",token);
      setToken(token, dispatch);
      // navigate("/studentinfo");
    },
    onError: (error: any) => {
      console.log(error);
      toast.error("Email failed");
    },
  });

  useEffect(() => {
    if (token) {
      verifyEmailMutation.mutateAsync();
    }
  }, [token]);

  return (
    <Box style={{ padding: "24px" }}>
      <Typography variant="h5" align="center">
        Verifying Email
      </Typography>
      <CustomLoader />
    </Box>
  );
};

export default VerifyEmail;