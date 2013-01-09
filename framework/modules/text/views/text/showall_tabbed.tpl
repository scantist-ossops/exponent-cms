{*
 * Copyright (c) 2004-2013 OIC Group, Inc.
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
 
{uniqueid assign="id"}

<div class="module text showall-tabbed">
    {if $moduletitle && !($config.hidemoduletitle xor $smarty.const.INVERT_HIDE_TITLE)}<h1>{$moduletitle}</h1>{/if}
    {permissions}
        <div class="module-actions">
            {if $permissions.create == 1}
                {icon class=add action=edit rank=1 text="Add Text Tab"|gettext}
            {/if}
            {if $permissions.manage == 1}
                {ddrerank items=$items model="text" label="Text Items"|gettext}
            {/if}
        </div>
    {/permissions}
    {if $config.moduledescription != ""}
        {$config.moduledescription}
    {/if}
    {$myloc=serialize($__loc)}
    {if !count($items)}
        {permissions}
            <div class="msg-queue info" style="text-align:center"><p>{'There are no text items/tabs in the module!'|gettext}</p></div>
        {/permissions}
    {else}
    <div id="text-{$id}" class="yui-navset exp-skin-tabview hide">
        <ul>
            {foreach from=$items item=tab name=tabs}
                <li><a href="#tab{$smarty.foreach.tabs.iteration}">{if $tab->title ==""}&#160;{else}{$tab->title}{/if}</a></li>
            {/foreach}
        </ul>
        <div>
            {foreach from=$items item=text name=items}
                <div id="tab{$smarty.foreach.items.iteration}">
                    {permissions}
						<div class="item-actions">
						   {if $permissions.edit == 1}
                                {if $myloc != $text->location_data}
                                    {if $permissions.manage == 1}
                                        {icon action=merge id=$text->id title="Merge Aggregated Content"|gettext}
                                    {else}
                                        {icon img='arrow_merge.png' title="Merged Content"|gettext}
                                    {/if}
                                {/if}
								{icon action=edit record=$text}
							{/if}
							{if $permissions.delete == 1}
								{icon action=delete record=$text}
							{/if}
						</div>
                    {/permissions}
                    <div class="bodycopy">
                        {if $config.filedisplay != "Downloadable Files"}
                            {filedisplayer view="`$config.filedisplay`" files=$text->expFile record=$text}
                        {/if}
                        {$text->body}
                        {if $config.filedisplay == "Downloadable Files"}
                            {filedisplayer view="`$config.filedisplay`" files=$text->expFile record=$text}
                        {/if}
                    </div>
                    {clear}
					{permissions}
						<div class="module-actions">
							{if $permissions.create == 1}
								{icon class=add action=edit rank=$text->rank+1 text="Add another text tab after this one"|gettext}
							{/if}
						</div>
					{/permissions}
                </div>
            {/foreach}
        </div>
    </div>
    <div class="loadingdiv">{'Loading'|gettext}</div>
</div>

{script unique="text-`$id`" yui3mods="1"}
{literal}
    EXPONENT.YUI3_CONFIG.modules.exptabs = {
        fullpath: EXPONENT.JS_RELATIVE+'exp-tabs.js',
        requires: ['history','tabview','event-custom']
    };

	YUI(EXPONENT.YUI3_CONFIG).use('exptabs', function(Y) {
        Y.expTabs({srcNode: '#text-{/literal}{$id}{literal}'});
		Y.one('#text-{/literal}{$id}{literal}').removeClass('hide');
		Y.one('.loadingdiv').remove();
	});
{/literal}
{/script}

{/if}
