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

<div id="uploadextension" class="module administration install-extension">
    <div class="info-header">
        <div class="related-actions">
            {help text="Get Help with"|gettext|cat:" "|cat:("Installing New Extensions"|gettext) module="install-extension"}
        </div>
        <h2>{'Install new Extension'|gettext}</h2>
    </div>
	<div id="extension-tabs" class="">
		<ul class="nav nav-tabs" role="tablist">
            <li role="presentation" class="nav-item"><a href="#tab1" class="nav-link active" role="tab" data-bs-toggle="tab"><em>{"Themes"|gettext}</em></a></li>
            <li role="presentation" class="nav-item"><a href="#tab2" class="nav-link" role="tab" data-bs-toggle="tab"><em>{"Fixes"|gettext}</em></a></li>
            <li role="presentation" class="nav-item"><a href="#tab3" class="nav-link" role="tab" data-bs-toggle="tab"><em>{"Addons"|gettext}</em></a></li>
            <li role="presentation" class="nav-item"><a href="#tab4" class="nav-link" role="tab" data-bs-toggle="tab"><em>{"Mods"|gettext}</em></a></li>
            <li role="presentation" class="nav-item"><a href="#tab5" class="nav-link" role="tab" data-bs-toggle="tab"><em>{"Upload Extension"|gettext}</em></a></li>
		</ul>
		<div class="tab-content">
			<div id="tab1" role="tabpanel" class="tab-pane fade show active">
				<h2>{"Themes"|gettext}</h2>
                {form action=install_extension_confirm}
                    {foreach from=$themes item=theme name=themes}
                        <div class="item" style="margin-top: 5px; padding-bottom: 5px; border-bottom: 1px; border-bottom-color: black; border-bottom-style: dashed;">
                            <div style="float: left;">{control type="checkbox" name="files[`$theme->name`]" label=" " value="`$theme->enclosure`"}</div>
                            <a href="{$theme->rss_link}" title="More Information"|gettext target="_blank"><h4>{$theme->title}</h4></a>
                            <em class="date">
                                {'Dated'|gettext}: {$theme->publish_date|format_date:$smarty.const.DISPLAY_DATETIME_FORMAT}
                            </em>
                            <em class="date">
                                {'Size'|gettext}: {$theme->length|bytes}
                            </em>
                            <div class="bodycopy">
                                {*{$theme->body|summarize:"html":"paralinks"}*}
                                {$theme->body|summarize:"html":"parahtml"}
                                <a href="{$theme->rss_link}" title="More Information"|gettext target="_blank">{'More Information'|gettext}</a>
                            </div>
                        </div>
                    {foreachelse}
                        <h4>{'There Are No Themes Available'|gettext}</h4>
                    {/foreach}
                    {if_elements array=$themes}{control type="buttongroup" submit="Install Selected Themes"|gettext}{/if_elements}
                {/form}
			</div>
			<div id="tab2" role="tabpanel" class="tab-pane fade">
				<h2>{"Patches and Fixes"|gettext}</h2>
                {form action=install_extension_confirm}
                    {control type=hidden name=patch value=1}
                    {foreach from=$fixes item=fix name=fixes}
                        <div class="item" style="margin-top: 5px; padding-bottom: 5px; border-bottom: 1px; border-bottom-color: black; border-bottom-style: dashed;">
                            <div style="float: left;">{control type="checkbox" name="files[`$fix->name`]" label=" " value="`$fix->enclosure`"}</div>
                            <a href="{$fix->rss_link}" title="More Information"|gettext target="_blank"><h4>{$fix->title}</h4></a>
                            <em class="date">
                                {'Dated'|gettext}: {$fix->publish_date|format_date:$smarty.const.DISPLAY_DATETIME_FORMAT}
                            </em>
                            <em class="date">
                                {'Size'|gettext}: {$fix->length|bytes}
                            </em>
                            <div class="bodycopy">
                                {*{$fix->body|summarize:"html":"paralinks"}*}
                                {$fix->body|summarize:"html":"parahtml"}
                                <a href="{$fix->rss_link}" title="More Information"|gettext target="_blank">{'More Information'|gettext}</a>
                            </div>
                        </div>
                    {foreachelse}
                        <h4>{'There Are No Fixes or Patches Available for this Version'|gettext}</h4>
                    {/foreach}
                    {if_elements array=$fixes}{control type="buttongroup" submit="Install Selected Patches"|gettext}{/if_elements}
                {/form}
			</div>
			<div id="tab3" role="tabpanel" class="tab-pane fade">
				<h2>{"Addons"|gettext}</h2>
                {form action=install_extension_confirm}
                    {control type=hidden name=patch value=1}
                    {foreach from=$addons item=addon name=addons}
                        <div class="item" style="margin-top: 5px; padding-bottom: 5px; border-bottom: 1px; border-bottom-color: black; border-bottom-style: dashed;">
                            <div style="float: left;">{control type="checkbox" name="files[`$addon->name`]" label=" " value="`$addon->enclosure`"}</div>
                            <a href="{$addon->rss_link}" title="More Information"|gettext target="_blank"><h4>{$addon->title}</h4></a>
                            <em class="date">
                                {'Dated'|gettext}: {$addon->publish_date|format_date:$smarty.const.DISPLAY_DATETIME_FORMAT}
                            </em>
                            <em class="date">
                                {'Size'|gettext}: {$addon->length|bytes}
                            </em>
                            <div class="bodycopy">
                                {*{addon->body|summarize:"html":"paralinks"}*}
                                {$addon->body|summarize:"html":"parahtml"}
                                <a href="{$addon->rss_link}" title="More Information"|gettext target="_blank">{'More Information'|gettext}</a>
                            </div>
                        </div>
                        {foreachelse}
                        <h4>{'There Are No Addons Available'|gettext}</h4>
                    {/foreach}
                    {if_elements array=$addons}{control type="buttongroup" submit="Install Selected Addons"|gettext}{/if_elements}
                {/form}
			</div>
            <div id="tab4" role="tabpanel" class="tab-pane fade">
                <h2>{"Modifications"|gettext}</h2>
                 {form action=install_extension_confirm}
                     {foreach from=$mods item=mod name=mods}
                         <div class="item" style="margin-top: 5px; padding-bottom: 5px; border-bottom: 1px; border-bottom-color: black; border-bottom-style: dashed;">
                             <div style="float: left;">{control type="checkbox" name="files[`$mod->name`]" label=" " value="`$mod->enclosure`"}</div>
                             <a href="{$mod->rss_link}" title="More Information"|gettext target="_blank"><h4>{$mod->title}</h4></a>
                             <em class="date">
                                 {'Dated'|gettext}: {$mod->publish_date|format_date:$smarty.const.DISPLAY_DATETIME_FORMAT}
                             </em>
                             <em class="date">
                                 {'Size'|gettext}: {$mod->length|bytes}
                             </em>
                             <div class="bodycopy">
                                 {*{$mod->body|summarize:"html":"paralinks"}*}
                                 {$mod->body|summarize:"html":"parahtml"}
                                 <a href="{$mod->rss_link}" title="More Information"|gettext target="_blank">{'More Information'|gettext}</a>
                             </div>
                         </div>
                         {foreachelse}
                         <h4>{'There Are No Modifications Available'|gettext}</h4>
                     {/foreach}
                     {if_elements array=$mods}{control type="buttongroup" submit="Install Selected Modifications"|gettext}{/if_elements}
                 {/form}
            </div>
			<div id="tab5" role="tabpanel" class="tab-pane fade">
                <h2>{"Extension File Upload"|gettext}</h2>
                <div class="form_header">{'This form allows you to upload custom modules, themes, and views to the website, or patch the installation.  After you upload an archive containing an extension you will be shown a pre-installation summary page outlining exactly what files will be installed where, and what each file contains (for security reasons)'|gettext}</div>
                <p><h4>{'It is NOT intended to be used to perform a full version upgrade!'|gettext}</h4></p>
				{*{$form_html}*}
                <div>
                    {expCore::maxUploadSizeMessage()}
                    {form action=install_extension_confirm}
                        {control type=uploader name=mod_archive label='Extension Archive'|gettext}
                        {control type="checkbox" name="patch" label='Patch Exponent CMS or Install Theme?' value=1 description='All extensions are normally placed within the CURRENT theme (folder)'|gettext}
                        {control class=uploadfile type=buttongroup submit="Upload Extension"|gettext}
                    {/form}
                </div>
			</div>
		</div>
	</div>
</div>
{loading}
