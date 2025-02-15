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
 * @subpackage Controllers
 * @package Modules
 */

class mediaController extends expController {
    public $useractions = array(
        'showall'=>'Show all'
    );
	public $remove_configs = array(
        'categories',
        'comments',
        'ealerts',
        'facebook',
        'files',
        'rss',
        'twitter',
    );  // all options: ('aggregation','categories','comments','ealerts','facebook','files','pagination','rss','tags','twitter',)
//    public $codequality = 'beta';

    static function displayname() { return gt("Media Player"); }
    static function description() { return gt("Display video files, YouTube links, or play audio streams on your site."); }
    static function isSearchable() { return true; }

    /**
     * can this module export EAAS data?
     *
     * @return bool
     */
    public static function canHandleEAAS() {
        return true;
    }

    function showall() {
        expHistory::set('viewable', $this->params, true);
        $page = new expPaginator(array(
            'model'=>$this->basemodel_name,
            'where'=>$this->aggregateWhereClause(),
            'limit'=>(isset($this->params['limit']) && $this->config['limit'] != '') ? $this->params['limit'] : 10,
            'order'=>"rank",
            'page'=>(isset($this->params['page']) ? $this->params['page'] : 1),
            'controller'=>$this->baseclassname,
            'action'=>$this->params['action'],
            'src'=>$this->loc->src,
            'columns'=>array(
                gt('ID#')=>'id',
                gt('Title')=>'title',
                gt('Description')=>'body'
            ),
        ));

        assign_to_template(array(
            'page'=>$page,
            'items'=>$page->records,
            'params'=>$this->params,
        ));
    }

    /**
     * returns module's EAAS data as an array of records
     *
     * @return array
     */
    public function eaasData($params=array(), $where=null) {
        $data = array();  // initialize
        if (!empty($params['id'])) {
            $media = new media($params['id']);
            $data['records'] = $media;
        } else {
            $media = new media();

            // figure out if we should limit the results
            if (isset($params['limit'])) {
                $limit = $params['limit'] === 'none' ? null : $params['limit'];
            } else {
                $limit = '';
            }

            $order = isset($params['order']) ? $params['order'] : 'created_at ASC';

            $items = $media->find('all', $where, $order, $limit);
            $data['records'] = $items;
        }
        return $data;
    }

}

?>