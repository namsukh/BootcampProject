router.post("/admin/register", async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!(email && password)) {
        res.status(400).send("All input are required");
      }
  
      const oldUser = await Admin.findOne({ email });
  
      if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
      }
  
      const hashPassword = await bcrypt.hash(password, 10);
  
      const user = await Admin.create({
        email: email.toLowerCase(),
        password: hashPassword,
      });
  
      const token = jwt.sign(
        { user_id: Admin._id },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      user.token = token;
  
      res.status(201).json(user);
    } catch (err) {
      console.log(err);
    }
  });
  router.post("/admin/login", async (req, res) => {
    try {
      const email = req.body.email;
      const password = req.body.password;
  
      if (email == null && password == null) {
        res.status(400).send("All inputs are required");
      }
      const user = await Admin.findOne({ email });
  
      if (user && (await bcrypt.compare(password, user.password))) {
        console.log("Login");
        const token = await jwt.sign({ user_id: user._id }, process.env.TOKEN_KEY, {
          expiresIn: "2h",
        });
  
        user.token = token;
  
        res.status(200).send(user.token);
      }
      res.status(400).send("Invalid Credentials");
    } catch (err) {
      console.log(err);
    }
  });
  
  router.post("/welcome", verifyToken, (req, res) => {
    res.status(200).json(req.user);
  });