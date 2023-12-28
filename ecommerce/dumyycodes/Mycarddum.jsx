import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

export function Mycard() {
  return (
    <Card
      shadow={false}
      className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
      style={{ height: "60vh", width: "40vh" }}
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody>
        <div className="flex flex-col justify-center items-center">
          <div className="relative py-14 px-6 md:px-12">
            <Typography
              variant="h2"
              color="white"
              className="mb-6 leading-[1.5] inset-0 bg-black opacity-60 "
              style={{ fontSize: "35px" }}
            >
              Flat 20 % off
              <Typography
                variant="h5"
                className="mb-4 text-gray-400"
                style={{ fontSize: "20px" }}
              >
                Ethnic Wear
              </Typography>
            </Typography>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
