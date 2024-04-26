import dotenv from 'dotenv';
import dbConfig from './config/dbConfig.mjs';
// const express=require('express');
import express from 'express';
const app=express();
dotenv.config();
// require("dotenv").config();
// const dbConfig=require("./config/dbConfig");
const port =process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});