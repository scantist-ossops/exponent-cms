<?php

##################################################
#
# Copyright (c) 2004-2012 OIC Group, Inc.
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
 * @subpackage Controllers
 * @package Modules
 */

class portfolioController extends expController {
    //public $basemodel_name = '';
    public $useractions = array(
        'showall'=>'Show all', 
        'tags'=>"Tags",
        'slideshow'=>"Slideshow"
    );
    public $remove_configs = array(
        'comments',
        'ealerts',
        'rss'
    ); // all options: ('aggregation','categories','comments','ealerts','files','module_title','pagination','rss','tags')

    function displayname() { return "Portfolio"; }
    function description() { return "This module allows you to show off your work portfolio style."; }
    function isSearchable() { return true; }

    public function showall() {
        $order = isset($this->config['order']) ? $this->config['order'] : 'rank';
        $limit = empty($this->config['limit']) ? 10 : $this->config['limit'];
        if (!empty($this->params['view']) && ($this->params['view'] == 'showall_accordion' || $this->params['view'] == 'showall_tabbed')) {
            $limit = 999;
        }

        $page = new expPaginator(array(
                    'model'=>$this->basemodel_name,
                    'where'=>$this->aggregateWhereClause(),
                    'limit'=>$limit,
                    'order'=>$order,
                    'categorize'=>empty($this->config['usecategories']) ? false : $this->config['usecategories'],
                    'controller'=>$this->baseclassname,
                    'src'=>$this->loc->src,
                    'action'=>$this->params['action'],
                    'columns'=>array('Title'=>'title'),
                    ));

        assign_to_template(array('page'=>$page, 'rank'=>($order==='rank')?1:0));
    }
    
    public function slideshow() {
        expHistory::set('viewable', $this->params);

        $order = isset($this->config['order']) ? $this->config['order'] : 'rank';
        $s = new portfolio();
        $slides = $s->find('all',$this->aggregateWhereClause(),$order);

        assign_to_template(array('slides'=>$slides, 'rank'=>($order==='rank')?1:0));
    }

    /**
   	 * The aggregateWhereClause function creates a sql where clause which also includes aggregated module content
   	 *
   	 * @return string
   	 */
   	function aggregateWhereClause() {
        $sql = parent::aggregateWhereClause();
        $sql .= (!empty($this->config['only_featured']))?"AND featured=1":"";
        return $sql;
    }

}

?>