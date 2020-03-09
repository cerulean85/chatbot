package com.zhwan.chatbotserv.repository

import android.content.Context
import com.zhwan.chatbotserv.model.MainModel
import com.zhwan.chatbotserv.network.NetManager
import io.reactivex.Observable

object Repository {

    val netManager = NetManager
    var localDataSource = LocalRepository()
    var remoteDataSource = RemoteRepository()

    fun getRepository(ctx: Context): Observable<ArrayList<MainModel>> {

        netManager.isConnected(ctx).let {

            if (it) return remoteDataSource.getRepository()
            return localDataSource.getRepository()
        }
    }
}