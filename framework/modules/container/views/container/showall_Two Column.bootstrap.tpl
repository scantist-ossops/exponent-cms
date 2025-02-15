{*
 * Copyright (c) 2004-2023 OIC Group, Inc.
 *
 * This file is part of Exponent
 *
 * Exponent is free software; you can redistribute
 * it and/or modify it under the terms of the GNU
 * General Public License as published by the Free
 * Software Foundation; either version 2 of the
 * License, or (at your option) any later version.
 *
 * GPL: http://www.gnu.org/licenses/gpl.txt
 *
 *}

<div class="containermodule two-column row-fluid"{permissions}{if $hasParent != 0} style="border: 1px dashed darkgray;"{/if}{/permissions}>
    {viewfile module=$singlemodule view=$singleview var=viewfile}
	{$container=$containers.1}
	{$i=0}
	{$rerank=0}
    <div class="span6 {module_style style=$container->config.mstyle}"> {* module styling output *}
    	{include file=$viewfile}
		{clear}
    </div>
	{$container=$containers.2}
	{$i=1}
    <div class="span6 {module_style style=$container->config.mstyle}"> {* module styling output *}
    	{include file=$viewfile}
		{clear}
    </div>
    {clear}
</div>
