<?php

##################################################
#
# Copyright (c) 2004-2023 OIC Group, Inc.
#
# This file is part of Exponent
#
# Exponent is free software; you can redistribute
# it and/or modify it under the terms of the GNU
# General Public License as published by the Free
# Software Foundation; either version 2 of the
# License, or (at your option) any later version.
#
# GPL: http://www.gnu.org/licenses/gpl.txt
#
##################################################

/**
 * @subpackage Definitions
 * @package Modules
 */
return array(
	'id'=>array(
		DB_FIELD_TYPE=>DB_DEF_ID,
		DB_PRIMARY=>true,
		DB_INCREMENT=>true),
	'title'=>array(
		DB_FIELD_TYPE=>DB_DEF_STRING,
		DB_FIELD_LEN=>200),
	'body'=>array(
		DB_FIELD_TYPE=>DB_DEF_STRING,
		DB_FIELD_LEN=>100000),
    'url'=>array(
        DB_FIELD_TYPE=>DB_DEF_STRING,
        DB_FIELD_LEN=>500),
    'url_title'=>array(
        DB_FIELD_TYPE=>DB_DEF_STRING,
        DB_FIELD_LEN=>500),
	'poster'=>array(
		DB_FIELD_TYPE=>DB_DEF_ID),
	'created_at'=>array(
		DB_FIELD_TYPE=>DB_DEF_TIMESTAMP),
	'editor'=>array(
		DB_FIELD_TYPE=>DB_DEF_ID),
	'edited_at'=>array(
		DB_FIELD_TYPE=>DB_DEF_TIMESTAMP),
	'rank'=>array(
		DB_FIELD_TYPE=>DB_DEF_INTEGER),
	'location_data'=>array(
		DB_FIELD_TYPE=>DB_DEF_STRING,
		DB_FIELD_LEN=>250,
		DB_INDEX=>10),
	'new_window'=>array(
		DB_FIELD_TYPE=>DB_DEF_BOOLEAN)
);

?>
