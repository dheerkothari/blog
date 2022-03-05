import User from '../Schema/user-schema.js';
import bcrypt from "bcrypt";
import constants from '../Constance/constance.js'
import jwt from 'jsonwebtoken';
let jwtKey = "jwt"
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt');  

export const addUser = async (req, res) => {

    let email = req.body.email;
    let pass = req.body.password;
    let dataSave = req.body

    try {
        let getUser = await User.findOne({ email: email })

        if (getUser) {
            return res.status(500).json("User already exits...")
        }

        else {
            const data = await new User(dataSave)
            // data.password = convertPass(pass)
            // console.log("password", data.password);

            data.token = ""

            return data.save().then(async (data) => {
                return res.status(200).send({
                    statusCode: constants.code.ok,
                    statusMessage: constants.message.addUser,
                    data
                });
            })
        }
    } catch (error) {
        console.log("err", error);
        res.status(500).json(error)
    }
    // try {
    //     const user = await new User(req.body)
    //     var email = req.body.email;

    //     let getUser = await User.findOne({ email: email })

    //     if (!getUser) {
    //         user.save().then((result) => {
    //             console.log("-------", result)
    //             res.status(200).json('user added successfully', result);
    //         })
    //     }
    // } catch (error) {
    //     console.log("err", error);
    //     res.status(500).json(error)
    // }
}

export const loginUser = async (req, res) => {

    var email = req.body.email;
    var password = req.body.password;

    try {
        let getUser = await User.findOne({ email: email })

        if (!getUser) {
            res.status(400).json('email not matched please sighup ...');
        }

        else {
            const checkPassword = await bcrypt.compare(password, getUser.password)

            if (checkPassword) {

                try {
                    const token = await jwt.sign({ getUser }, jwtKey);

                    if (getUser.token.length <= 0)
                        await User.updateOne({ email: email }, { token: token })

                    // return { firstname: getUser.firstname, lastname: getUser.lastname, token, email: getUser.email };
                    res.status(200).json({ firstname: getUser.firstName, lastname: getUser.lastName, token, email: getUser.email });

                } catch (error) {
                    console.log(error);
                }
            } else {
                res.status(400).json('password not matched..');
            }
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
