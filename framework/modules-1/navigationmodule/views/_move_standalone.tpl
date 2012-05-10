{*
 * Copyright (c) 2004-2012 OIC Group, Inc.
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

<div class="navigationmodule form-moveStandalonePage">
    <div class="info-header">
        <div class="related-actions">
			{help text="Get Help"|gettext|cat:" "|cat:("Moving Standalone Pages"|gettext) module="move-standalone-page"}
        </div>
	    <h1>{'Move Standalone Page'|gettext}</h1>
	</div>

	<div class="form_header">
		{'Select the standalone page you wish to move into the Site Hierarchy, and click \'Save\''|gettext}
	</div>
	{$form_html}
{script unique="configure" yui3mods=1}
{literal}
    YUI(EXPONENT.YUI3_CONFIG).use('tabview', function(Y) {
        var tabview = new Y.TabView({srcNode:'#configure-tabs'});
        tabview.render();
        Y.one('#configure-tabs').removeClass('hide');
        Y.one('.loadingdiv').remove();
    });
{/literal}
{/script}
</div>