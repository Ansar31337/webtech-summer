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