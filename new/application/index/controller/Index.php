<?php
namespace app\index\controller;

use think\Db;

class Index
{
    public function index($name='')
    {
        $user = model("User");
        $data = $user->getDataById(2);
        dump($data);
        if(!$data) {
            return resultArray(['data' => $user->getError()]);
        }
        return resultArray(['data' => $data]);
    }
    // 通过主键获取信息
    public function getUserInfo($uid='')
    {
        $user = model("User");
        $data = $user->getDataById($uid);
//        dump($data);
        if(!$data) {
            return resultArray(['error' => $user->getError()]);
        }
        return resultArray(['data' => $data]);
    }
}
