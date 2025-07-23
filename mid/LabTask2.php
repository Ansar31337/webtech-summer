<!Doctype html>
<html>

<head>
    <title>Bank Management System</title>
    <style> 
           body {
               background-color: #f5f5f5;
               font-family: Arial, sans-serif;
               margin: 0;
               padding: 0;
               height: 100vh;
           }
           h1, h2{
            text-align: center;
            color: darkgreen;
            margin: 10px 0;
           }
           .form-box {
               width: 480px;
               background-color: white;
               margin: 10px auto;
               padding: 15px;
               border: 1px solid #ccc;
               border-radius: 6px;
           }
           table {
              width: 100%;
           }
           td {
               padding: 6px
           }
           td { 
                padding: 6px;
                font-size: 14px;
           }
           input[type="text"],
           input[type="email"],
           input[type="data"],
           input[type="password"],
           select {
                width: 100%;
                padding: 5px;
           }
           input[type="file"] {
               padding: 5px;
           }
           input[type="submit"],
           input[type="reset"] {
               padding: 6px 14px;
               margin-top: 8px;
               cursor: pointer;
           }
           input[type="checkbox"] {
                margin-top: 8px;
           }
           textarea {
                 width: 100%;
           }
     </style>
</head>

<body>
    <h1> Bank Management System</h1>
    <h2>Your Trusted Financial Partner</h2>
    <div class="form-box">
        <form action="#" method="post" enctype="multipart/form-data">
            <fieldset>
                <legend><strong>Customer Registration Form</strong></legend>
                <table>
                   <tr>
                         <td>Full Name:
                             <br>
                             <input type="text" name="fullname">
                       </td>
                    </tr>
                    <tr>
                        <td>Date of Birth:
                            <br>
                            <input type="date" name="dob">
                        </td>
                    </tr>
                    <tr>
                        <td>Gender:
                            <br>
                            <input type="radio" name="gender" value="Male"> Male
                            <input type="radio" name="gender" value="Female"> Female
                            <input type="radio" name="gender" value="Other"> Other
                        </td>
                    </tr>
                    <tr>
                         <td>Marital Status:
                            <br>
                            <select name="marital">
                                <option value="Single">Single</option>
                                <option value="Married">Married</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                         <td>Account Type:
                            <br>
                            <select name="account_type">
                                <option value="Savings">Savings</option>
                                <option value="Current">Current</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Initial Deposit Amount:
                            <br>
                            <input type="text" name="deposit">
                       </td>
                    </tr>
                    <tr>
                        <td>Mobile Number:
                            <br>
                            <input type="text" name="mobile">
                        </td>
                    </tr>
                    <tr>
                        <td>Email Address:
                            <br>
                            <input type="email" name="email">
                        </td>
                    </tr>
                    <tr>
                        <td>Address:
                            <br>
                            <input type="text" name="address">
                        </td>
                    </tr>
                    <tr>
                        <td>Occupation:
                            <br>
                            <input type="text" name="occupation">
                        </td>
                    </tr>
                    <tr>
                        <td>National ID (NID):
                            <br>
                            <input type="text" name="nid">
                        </td>
                    </tr>
                    <tr>
                        <td>Set Password:
                            <br>
                            <input type="password" name="password">
                        </td>
                    </tr>
                    <tr>
                        <td>Upload ID Proof:
                            <br>
                            <input type="file" name="file">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" name="agree"> I agree to the terms and conditions
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="submit" value="Register">
                            <input type="reset" value="Clear">
                        </td>
                    </tr>
                </table>
            </fieldset>
        </form>
    </div>
</body>

</html>