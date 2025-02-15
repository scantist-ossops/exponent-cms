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
 * @package Core
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
	'sef_url'=>array(
		DB_FIELD_TYPE=>DB_DEF_STRING,
		DB_FIELD_LEN=>150,
		DB_INDEX=>10),
	'is_active'=>array(
		DB_FIELD_TYPE=>DB_DEF_BOOLEAN),
	'is_events'=>array(
		DB_FIELD_TYPE=>DB_DEF_BOOLEAN),
	'hide_closed_events'=>array(
		DB_FIELD_TYPE=>DB_DEF_BOOLEAN),
    'canonical'=>array(
   		DB_FIELD_TYPE=>DB_DEF_STRING,
   		DB_FIELD_LEN=>800),
	'meta_title'=>array(
		DB_FIELD_TYPE=>DB_DEF_STRING,
		DB_FIELD_LEN=>255),
	'meta_keywords'=>array(
		DB_FIELD_TYPE=>DB_DEF_STRING,
		DB_FIELD_LEN=>10000),
	'meta_description'=>array(
		DB_FIELD_TYPE=>DB_DEF_STRING,
		DB_FIELD_LEN=>10000),
    'noindex'=>array(
   		DB_FIELD_TYPE=>DB_DEF_BOOLEAN),
    'nofollow'=>array(
   		DB_FIELD_TYPE=>DB_DEF_BOOLEAN),
	'items_per_page'=>array(
		DB_FIELD_TYPE=>DB_DEF_INTEGER),
	'expFiles_id'=>array(
		DB_FIELD_TYPE=>DB_DEF_ID),
	'rgt'=>array(
		DB_FIELD_TYPE=>DB_DEF_INTEGER,
        DB_INDEX=>10),
	'lft'=>array(
		DB_FIELD_TYPE=>DB_DEF_INTEGER,
        DB_INDEX=>10),
	'parent_id'=>array(
		DB_FIELD_TYPE=>DB_DEF_ID,
        DB_INDEX=>10),
	'poster'=>array(
		DB_FIELD_TYPE=>DB_DEF_ID),
	'created_at'=>array(
		DB_FIELD_TYPE=>DB_DEF_TIMESTAMP),
    'editor'=>array(
   		DB_FIELD_TYPE=>DB_DEF_ID),
	'edited_at'=>array(
		DB_FIELD_TYPE=>DB_DEF_TIMESTAMP),
	'location_data'=>array(
		DB_FIELD_TYPE=>DB_DEF_STRING,
		DB_FIELD_LEN=>250,
		DB_INDEX=>10)
);

?>
