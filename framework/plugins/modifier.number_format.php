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
 * Smarty {number_format} modifier plugin
 *
 * Type:     modifier<br>
 * Name:     number_format<br>
 * Purpose:  format a number
 *
 * @param $number
 * @param $decimals
 *
 * @return string
 *
 * @package Smarty-Plugins
 * @subpackage Modifier
 */
function smarty_modifier_number_format($number,$decimals) {
    $number = ($number=="") ? 0 : $number;
	return number_format((float)$number,$decimals,".",",");
}

?>