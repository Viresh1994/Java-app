<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>WSS | Log in</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <!-- Bootstrap 3.3.7 -->
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="css/font-awesome.min.css">
  <!-- Ionicons -->
  <link rel="stylesheet" href="css/ionicons.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="css/AdminLTE.min.css">
  <!-- iCheck -->
  <link rel="stylesheet" href="css/blue.css">

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->

  <!-- Google Font -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">
</head>
<body class="hold-transition login-page">

  <!-- /.login-logo -->

    <div class="row" id="viewDeviceRow">
		<br><br>
			<div class="col-md-10 col-md-offset-1">
				<div class="box box-primary">
					<div class="box-header with-border">
              			<h3 class="box-title">Add Network Device</h3>
            		</div>
            		
              			<div class="box-body">
                			<table id="table1" class="table table-bordered table-striped">
                				<thead>
                					<tr>
                  						<th>Device Name</th>
                  						<th>IPAddress</th>
                  						<th>Port</th>
                  						<th>Device Type</th>
                  						<th>Reachable</th>
                  						<th>Protocol</th>
                					</tr>
                				</thead>
                				<tbody>
                					<tr>
                						<td><span id="sparkline"></span></td>
                						<td>10.19.0.181</td>
                						<td>7090</td>
                						<td>Cisco Router</td>
                						<th>true</th>
                						<th>SNMP</th>
                					</tr>
                					<tr>
                						<td>10.19.0.181</td>
                						<td>10.19.0.181</td>
                						<td>7090</td>
                						<td>Cisco Router</td>
                						<th>true</th>
                						<th>SNMP</th>
                					</tr>
                					<tr>
                						<td>10.19.0.181</td>
                						<td>10.19.0.181</td>
                						<td>7090</td>
                						<td>Cisco Router</td>
                						<th>true</th>
                						<th>SNMP</th>
                					</tr>
                					<tr>
                						<td>10.19.0.181</td>
                						<td>10.19.0.181</td>
                						<td>7090</td>
                						<td>Cisco Router</td>
                						<th>true</th>
                						<th>SNMP</th>
                					</tr>
                				</tbody>
                			</table>
              			</div>
				</div>
			</div>



  <!-- /.login-box-body -->
</div>
<!-- /.login-box -->

<!-- jQuery 3 -->
<script src="js/jquery.min.js"></script>
<!-- Bootstrap 3.3.7 -->
<script src="js/bootstrap.min.js"></script>
<!-- iCheck -->
<script src="js/icheck.min.js"></script>
<!-- Sparkline -->
<script src="js/jquery.sparkline.min.js"></script>
<script>
  $(function () {
    $('input').iCheck({
      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue',
      increaseArea: '20%' /* optional */
    });
  });
  var values= [10,8,9,3,5,8,5,12,4,4,7]
  $('#sparkline').sparkline(values,{
	  type: 'line',
	  width: '20%',
	  height: '30%'
  });
  
</script>
</body>
</html>